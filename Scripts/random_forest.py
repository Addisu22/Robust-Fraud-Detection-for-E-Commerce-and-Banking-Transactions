from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
from IPython.display import display

# def train_and_evaluate_rf(fraud_df, target_column="Class", test_size=0.2, random_state=1):
#     """
#     Train a Random Forest model and print classification report.
    
#     Parameters:
#         data (pd.DataFrame): Dataset containing features + target.
#         target_column (str): Name of target column (default: 'Class').
#         test_size (float): Test split ratio (default: 0.2).
#         random_state (int): Random seed for reproducibility.
    
#     Returns:
#         clf (RandomForestClassifier): Trained model.
#         report (str): Classification report.
#         (X_train, X_test, y_train, y_test): Train-test split for reuse.
#     """
#     # Split features and target
#     X = fraud_df.drop(target_column, axis=1)
#     y = fraud_df[target_column]

#     # Train-test split
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state)

#     # Train model
#     clf = RandomForestClassifier(random_state=random_state)
#     clf.fit(X_train, y_train)

#     # Predict
#     y_pred = clf.predict(X_test)

#     # Generate report
#     report = classification_report(y_test, y_pred)

#     report__rf_df = pd.DataFrame(report).transpose()
#     display(report)
    
#     return clf, report, (X_train, X_test, y_train, y_test)
# ------------------------
# Import libraries
# ------------------------
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from IPython.display import display
import shap

# ------------------------
# Function to train, evaluate, and compute SHAP
# ------------------------
def train_evaluate_shap(fraud_df, target_column="Class", sample_size=None, test_size=0.2, random_state=42):
    """
    Train Random Forest on data (optionally sampled), print classification report,
    and compute SHAP values.
    
    Parameters:
        data (pd.DataFrame): Dataset containing features + target.
        target_column (str): Name of target column (default: 'Class').
        sample_size (int or None): Number of records to sample for training.
        test_size (float): Test split ratio.
        random_state (int): Random seed.
    
    Returns:
        clf: Trained Random Forest model
        report_df: Classification report as pandas DataFrame
        explainer: SHAP explainer
        shap_values: SHAP values for X_test
        X_test: Test features
    """
    # ------------------------
    # Sample data if requested
    # ------------------------
    if sample_size is not None:
        fraud_df = fraud_df.sample(n=sample_size, random_state=random_state)
    
    # ------------------------
    # Split features and target
    # ------------------------
    X = fraud_df.drop(target_column, axis=1)
    y = fraud_df[target_column]
    
    # ------------------------
    # Train-test split
    # ------------------------
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state, stratify=y)
    
    # ------------------------
    # Train Random Forest
    # ------------------------
    clf = RandomForestClassifier(random_state=random_state)
    clf.fit(X_train, y_train)
    
    # ------------------------
    # Predict and evaluate
    # ------------------------
    y_pred = clf.predict(X_test)
    report_dict = classification_report(y_test, y_pred, output_dict=True)
    report_df = pd.DataFrame(report_dict).transpose()
    display(report_df)
    
    # ------------------------
    # SHAP explainability
    # ------------------------
    explainer = shap.Explainer(clf, X_train)
    shap_values = explainer(X_test)
    
    return clf, report_df, explainer, shap_values, X_test