import { Schema, model } from 'mongoose';

const hangarSchema = new Schema({
    IdHangar: {
        type: String,
        unique: true,
        trim: true,
    },
    NombreHangar: {
        type: String,
        unique: true,
        trim: true,
    },
    Encargado: {
        type: String,
    },
    TelefonoEncargado: {
        type: String,
    },
    TipoHangar: {
        type: String,
    },
    Ciudad: {
        type: String,
    },
    DireccionAeropuerto: {
        type: String,
    },
    AreaHangar: {
        type: String,
    },
});

const Hangar = model('hangar', hangarSchema);

export default Hangar;
