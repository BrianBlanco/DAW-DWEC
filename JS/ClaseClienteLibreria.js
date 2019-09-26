class Client {
    constructor(dni, nombre, direccion, telefono) {
        this.dni = dni;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    get getDni() {
        return this.dni;
    }

    get getNombre() {
        return this.nombre;
    }

    get getDireccion() {
        return this.direccion;
    }

    get getTelefono() {
        return this.telefono;
    }

    
}

class Book {
        constructor(isbn, titulo, autor, pais) {
            this.isbn = isbn;
            this.titulo = titulo;
            this.autor = autor
            this.pais = pais;
        }
        get getIsbn() {
            return this.isbn;
        }
    
        get getTitulo() {
            return this.titulo;
        }
    
        get getAutor() {
            return this.autor;
        }
    
        get getPais() {
            return this.pais;
        }
}