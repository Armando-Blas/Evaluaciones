const express = require('express');
const router = express.Router();

function sessionValidation(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
}

// Aplicar el middleware a todas las rutas
router.use(sessionValidation);

router.get('/', (req, res) => {
    res.render('home', {activePage: 'inicio', title: 'EVALUACIONES DOCENTES'});
});

router.get('/inicio', (req, res) => {
    res.render('home', {activePage: 'inicio', title: 'EVALUACIONES DOCENTES'});
});

router.get('/usuarios', (req, res) => {
    res.render('home', {activePage: 'usuarios', title: 'EVALUACIONES DOCENTES'});
});

router.get('/historial', (req, res) => {
    res.render('home', {activePage: 'historial', title: 'EVALUACIONES DOCENTES'});
});

router.get('/evaluaciones', (req, res) => {
    res.render('home', {activePage: 'evaluaciones', title: 'EVALUACIONES DOCENTES'});
});

router.get('/reportes', (req, res) => {
    res.render('home', {activePage: 'reportes', title: 'EVALUACIONES DOCENTES'});
});

module.exports = router;
