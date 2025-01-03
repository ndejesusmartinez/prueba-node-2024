/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario
 *         userName:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *       example:
 *         _id: 1
 *         userName: JohnDoe
 *         email: johndoe@example.com
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     hangar:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario
 *         userName:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *       example:
 *         _id: 1
 *         userName: JohnDoe
 *         email: johndoe@example.com
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     login:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario
 *         userName:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *       example:
 *         password: "123456789"
 *         email: "bejucapainternet@hotmail.com"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     loginError:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del usuario
 *         userName:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *       example:
 *         password: "123456789"
 *         email: "bejucapainternet@hotmail.com.co"
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       201:
 *         description: Creacion de usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *  
 *   post:
 *    summary: Crear un nuevo usuario
 *    tags: [Users]
 */

/**
 * @swagger
 * /api/hangar:
 *   get:
 *     summary: Obtiene la lista de todos los hangares almacenados en DB
 *     tags: [Hangar]
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *  
 *   post:
 *    summary: Crear un nuevo hangar en la DB
 *    tags: [Hangar]
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Obtiene el token de acceso
 *     tags: [login]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: retorno de token de acceso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/login'
 *       403:
 *         description: Error en las credenciales
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/loginError'
 *  
 */