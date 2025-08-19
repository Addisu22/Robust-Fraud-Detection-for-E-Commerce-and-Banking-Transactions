from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

def Class_prediction_report(fraud_df, target_col="Class", test_size=0.2, random_state=1):
    # Split features and target
    X = fraud_df.drop(target_col, axis=1)
    y = fraud_df[target_col]

    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state, stratify=y)

    # Train Random Forest
    fraud_clf = RandomForestClassifier(random_state=random_state)
    fraud_clf.fit(X_train, y_train)

    # Predict
    y_pred = fraud_clf.predict(X_test)

    # Report
    print(classification_report(y_test, y_pred))

    return fraud_clf