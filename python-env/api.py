from flask import Flask, jsonify as json
from main import getProperties


app = Flask(__name__)
app.config["DEBUG"] = True


@app.route("/")
def test_function():
    return json(getProperties())


if __name__ == "__main__":
    app.run()
