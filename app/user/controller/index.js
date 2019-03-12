module.exports = {
    _get: require('./get'),
    _openCreate: require('./create').create_form,
    _create: require('./create').create,
    _openEdit: require('./edit').edit_form,
    _update: require('./edit').update,
    _deleteUser: require('./delete').delete_user
}