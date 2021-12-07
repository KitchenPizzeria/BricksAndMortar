import json
from flask import Flask
from flask import jsonify
from main import getProperties


app = Flask(__name__)
app.config["DEBUG"] = True
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False


@app.route("/")
def router():
    properties = getProperties()
    return json.dumps(properties)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
