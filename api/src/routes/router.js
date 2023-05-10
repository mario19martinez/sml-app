const { Router } = require("express");
const router = Router();
const employeesRouter = require("./EmployeesRouter");
const leedsRouter = require("./leadsRouter")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/leads", leedsRouter);
router.use("/employees", employeesRouter)



module.exports = router;



