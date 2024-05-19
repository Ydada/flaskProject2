import os
from datetime import timedelta


class BaseConfig:
    SECRET_KEY = os.getenv("SECRET_KEY", "test-admin-flask")

    SQLALCHEMY_DATABASE_URI = ""

    ROOT_PATH = os.path.dirname(os.path.abspath(__file__))

    JWT_TOKEN_LOCATION = ["headers"]
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=5)


class DevelopmentConfig(BaseConfig):
    """开发配置"""

    SQLALCHEMY_DATABASE_URI = "sqlite:///test_admin.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class TestingConfig(BaseConfig):
    """测试配置"""

    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"  # 内存数据库


class ProductionConfig(BaseConfig):
    """生成环境配置"""

    SQLALCHEMY_DATABASE_URI = "sqlite:///test_admin.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


config = {"dev": DevelopmentConfig, "test": TestingConfig, "prod": ProductionConfig}
