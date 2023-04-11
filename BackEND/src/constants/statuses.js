const statuses = {
    // Codigos de estado satisfactorios
    OK: 200,
    CREATED: 201,
    // Coddigos de estado erroneos (Parte del cliente)
    BADREQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOTFOUND: 404,
    BADPASSW: 405,
    MISSINGREQUIRED: 420,
    BADDATE: 421,
    BADFORMAT: 422,
    DUPLICATED: 427,
    BADEMAIL: 441,
    BADGENDER:444,
  };

module.exports = statuses;