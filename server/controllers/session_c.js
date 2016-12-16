const mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = (function() {
    return {
        login: function(req, res) {
            User.findOne({name: req.body.name}, function(err, user) {
                if (!user) {
                    let new_user = new User(req.body);
                    if (!new_user.validateSync()) {
                        new_user.save()
                        req.session.user = new_user;
                        res.json({user:req.session.user})
                    }
                    else {
                        res.json({status: false})
                    }
                }
                else {
                    req.session.user = user;
                    res.json({user:req.session.user})
                }
            })
        },
        get_curr_user: function(req, res) {
            if (!req.session.user || req.session.user == undefined) {
                res.send(null);
            }
            else {
                res.send(req.session.user)
            }
        },
        logout: function(req, res) {
            req.session.destroy()
            res.redirect('/')
        }
    }
})()
