const { defineAbility } = require('@casl/ability');

function defineAbilityFor(user) {
    return defineAbility((can) => {
        // can('read', 'Pokemon');
        // can('update', 'Article', { authorId: user.id });
        // can('create', 'Comment');
        // can('update', 'Comment', { authorId: user.id });
        can('read', 'Pokemon', { user: user._id });
    });
}

// function defineAbility() {
//     return defineAbility((can, cannot) => {
//         can('manage', 'all');
//         cannot('delete', 'User');
//     });
// }

module.exports = {
    defineAbilityFor,
    // defineAbility
};