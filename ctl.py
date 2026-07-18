from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    with open("result.txt", "r", encoding="utf-8") as f:
        text = f.read()

    return f"""<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Result</title>
  </head>
  <body>
    <pre>{text}</pre>
  </body>
</html>"""

if __name__ == "__main__":
    app.run(debug=True)
