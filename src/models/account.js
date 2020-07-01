module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email : {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        jwtVersion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaulValue: 0,
        }
    });

    Account.associate = models => Account.hasMany(models.Product, { foreignKey: 'accountId'});

    Account.prototype.toJSON = function() {
        const values = { ...this.get() };
        delete values.password;
        return values;
    }

    return Account;
};