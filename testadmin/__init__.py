from flask import Flask, render_template

from configs import config
from testadmin.apis import register_apis
from testadmin.extensions import register_extensions
from testadmin.orms import UserORM
from testadmin.views  import register_views


def create_app(config_name="dev"):
    app = Flask("pear-admin-flask")

    app.config.from_object(config[config_name])

    register_extensions(app)
    register_apis(app)

    register_views(app)

    # @app.errorhandler(403)
    # def handle_404(e):
    #     return render_template("error/403.html")
    #
    # @app.errorhandler(404)
    # def handle_403(e):
    #     return render_template("error/404.html")
    #
    # @app.errorhandler(500)
    # def handle_500(e):
    #     return render_template("error/500.html")

    return app
