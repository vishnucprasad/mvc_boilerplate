//For Register Page
const dashboardView = (req, res) => {
    res.render("user/dashboard", {
        user: req.user
    });
};

module.exports = {
    dashboardView,
};