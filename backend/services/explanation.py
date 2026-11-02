import pandas as pd


def explain_prediction(model, preprocessor, input_data):
    """
    Explain a Linear Regression prediction using feature contributions.
    """

    processed_data = preprocessor.transform(input_data)

    feature_names = preprocessor.get_feature_names_out()

    coefficients = model.coef_

    contributions = processed_data[0] * coefficients

    explanation = []

    for name, contribution in zip(feature_names, contributions):
        explanation.append({
            "feature": name,
            "impact": round(float(contribution), 4)
        })

    explanation.sort(
        key=lambda x: abs(x["impact"]),
        reverse=True
    )

    return explanation