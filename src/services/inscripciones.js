import request from '../shared/Request';

const getAlumnoByRun = run => {
    return request({
        url: '/api-persona/v1/personas?run='+run,
        method: 'GET'
    });
}

const getApoderadoAlumno = idApoderado =>{

}

const inscripcionesServices = {
    getAlumnoByRun,
    getApoderadoAlumno,
}

export default inscripcionesServices;