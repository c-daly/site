from flask import Flask
import os
from config.env import load_environment

# Load environment variables from .env file
load_environment()

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)