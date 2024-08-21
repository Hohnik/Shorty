from flask import Flask, send_file
from flask.templating import render_template

def main():
    app = Flask(__name__)

    @app.route('/')
    def home():
        return render_template('index.html')

    @app.route('/favicon.ico')
    def favicon():
        return send_file('./static/assets/favicon.ico')

    @app.route('/vim')
    def vim():
        return render_template('tools/vim/vim.html')

    @app.route('/arc')
    def arc():
        return 'Hello, Arc user!'

    app.run(debug=True, port=5000)

if __name__ == '__main__':
    main()
