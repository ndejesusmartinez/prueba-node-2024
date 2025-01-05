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
 *         userName: admin
 *         email: admin@admin.com
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
 *         _id: "1"
 *         IdHangar: "123456790"
 *         NombreHangar: "medellin-2"
 *         Encargado: "naren martinez2"
 *         TelefonoEncargado: "3172133383"
 *         TipoHangar: "privado"
 *         Ciudad: "Medellin"
 *         DireccionAeropuerto: "aeropuerto medellin"
 *         AreaHangar: "51"
 * 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     token:
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
 *     tokenError:
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
 *         errorData: "Credenciales inválidas"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     error:
 *       type: object
 *       example:
 *         error: "Mensaje de error"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     tokenSuccess:
 *       type: object
 *       example:
 *         message: "Autenticación exitosa"
 *         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     emptyToken:
 *       type: object
 *       example:
 *         error: "Token no suministrado en los headers, favor validar!"
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     hangarCreate:
 *       type: object
 *       example:
 *         IdHangar: "123456790"
 *         NombreHangar: "medellin-2"
 *         Encargado: "naren martinez2"
 *         TelefonoEncargado: "3172133383"
 *         TipoHangar: "privado"
 *         Ciudad: "Medellin"
 *         DireccionAeropuerto: "aeropuerto medellin"
 *         AreaHangar: "51"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     hangarCreateError:
 *       type: object
 *       example:
 *         error: "El campo *** es de carcater obligatorio"
 *         status: "failed"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     hangarCreated:
 *       type: object
 *       example:
 *         status: "success"
 */






/**
 * @swagger
 * /api/token:
 *   post:
 *     summary: Obtiene el token de acceso
 *     tags: [Token de acceso]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/token'
 *     responses:
 *       200:
 *         description: retorno de token de acceso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tokenSuccess'
 *       403:
 *         description: Error en las credenciales
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tokenError'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *      
 *  
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Listado de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *  
 *   post:
 *    summary: Crear un nuevo usuario
 *    tags: [Users]
 *    responses:
 *       201:
 *         description: Creacion de usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error en la data suministrada a la API
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */

/**
 * @swagger
 * /api/hangar:
 *   get:
 *     summary: Obtiene la lista de todos los hangares almacenados en DB
 *     tags: [Hangar]
 *     responses:
 *       200:
 *         description: listado de hangares
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hangar'
 *       403:
 *         description: Token no suministrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/emptyToken'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Token incorrecto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *  
 *   post:
 *    summary: Crear un nuevo hangar en la DB
 *    tags: [Hangar]
 *    requestBody:
 *     required: true
 *     content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hangarCreate'
 *    responses:
 *       201:
 *         description: creacion de hangar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hangarCreated'
 *       400:
 *         description: Error en la data suministrada a la API
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hangarCreateError'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       409:
 *         description: Dato duplicado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */