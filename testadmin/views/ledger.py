from flask import Blueprint, render_template, send_file, send_from_directory

ledger_bp = Blueprint("ledger", __name__)


@ledger_bp.route("/ledger/info")
def index():
    return render_template("ledger/info/index.html")

