import pandas as pd

def load_and_preview(csv_path):
    """
    Load a CSV file into a pandas DataFrame and display the first n rows.

    Parameters:
        csv_path (str): Path to the CSV file.
        n_rows (int): Number of rows to display from the top. Default is 5.

    Returns:
        pd.DataFrame: The loaded DataFrame.
    """
    df = pd.read_csv(csv_path)
    print(f"Loaded '{csv_path}' successfully")
    return df