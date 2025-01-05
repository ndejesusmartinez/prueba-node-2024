import { Schema, model } from 'mongoose';

const hangarSchema = new Schema({
    IdHangar: {
        type: String,
        unique: true,
        trim: true,
    },
    NombreHangar: {
        type: String,
        unique: false,
        trim: true,
    },
    Encargado: {
        type: String,
        unique: false,
    },
    TelefonoEncargado: {
        type: String,
        unique: false,
    },
    TipoHangar: {
        type: String,
        unique: false,
    },
    Ciudad: {
        type: String,
        unique: false,
    },
    DireccionAeropuerto: {
        type: String,
        unique: false,
    },
    AreaHangar: {
        type: String,
        unique: false,
    },
});

const Hangar = model('hangar', hangarSchema);

export default Hangar;
