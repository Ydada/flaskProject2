from datetime import datetime

from testadmin.extensions import db

from ._base import BaseORM


class LedgerORM(BaseORM):
    __tablename__ = "ledger_info"

    id = db.Column(db.Integer, primary_key=True, comment="自增id")
    hostname = db.Column(db.String(128), nullable=True,unique=True, comment="主机名")
    ip1 = db.Column(db.String(15), nullable=False, unique=True, comment="综合网IP地址")
    ip2 = db.Column(db.String(15), nullable=False, unique=True,comment="数据网IP地址")
    ip3 = db.Column(db.String(15), nullable=True, unique=True, comment="存储网IP地址")
    ip4 = db.Column(db.String(15), nullable=True, comment="其他IP地址")
    app_name = db.Column(db.String(15), nullable=True, comment="应用服务名")
    app_vendors = db.Column(db.String(15), nullable=True, comment="厂商")
    app_owner = db.Column(db.String(15), nullable=True, comment="负责人")
    # app_owner_mobile = db.Column(db.String(32), nullable=False, comment="负责人手机号")
    app_dest = db.Column(db.String(128), nullable=True, comment="业务内容")
    remark = db.Column(db.String(128), nullable=True, comment="备注")
    create_at = db.Column(
        db.DateTime,
        nullable=False,
        comment="创建时间",
        default=datetime.now,
    )

    def json(self):
        return {
            "id": self.id,
            "hostname": self.hostname,
            "ip1": self.ip1,
            "ip2": self.ip2,
            "ip3": self.ip3,
            "ip4": self.ip4,
            "app_name": self.app_name,
            "app_vendors": self.app_vendors,
            "app_owner": self.app_owner,
            "app_dest": self.app_dest,
            "remark": self.remark,
            "create_at": self.create_at.strftime("%Y-%m-%d %H:%M:%S"),
        }
