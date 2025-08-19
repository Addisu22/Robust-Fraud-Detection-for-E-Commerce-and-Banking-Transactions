from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
from IPython.display import display

def train_and_evaluate_rf(fraud_df, target_column="Class", test_size=0.2, random_state=1):
    """
    Train a Random Forest model and print classification report.
    
    Parameters:
        data (pd.DataFrame): Dataset containing features + target.
        target_column (str): Name of target column (default: 'Class').
        test_size (float): Test split ratio (default: 0.2).
        random_state (int): Random seed for reproducibility.
    
    Returns:
        clf (RandomForestClassifier): Trained model.
        report (str): Classification report.
        (X_train, X_test, y_train, y_test): Train-test split for reuse.
    """
    # Split features and target
    X = fraud_df.drop(target_column, axis=1)
    y = fraud_df[target_column]

    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state)

    # Train model
    clf = RandomForestClassifier(random_state=random_state)
    clf.fit(X_train, y_train)

    # Predict
    y_pred = clf.predict(X_test)

    # Generate report
    report = classification_report(y_test, y_pred)

    report__rf_df = pd.DataFrame(report).transpose()
    display(report)
    
    return clf, report, (X_train, X_test, y_train, y_test)