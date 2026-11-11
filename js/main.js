
class Libro {
    constructor(titulo, autor, isbn, _prestado){
        this.titulo= titulo;
        this.autor= autor;
        this.isbn= isbn;
        this._prestado= _prestado;
    }
    prestar(estado){
        this._prestado = true;
    }
    devolver(estado){
        this._prestado = false;
    }
    getEstado(){
        if (this._prestado == false){
            return "disponible";
        }else{
            return "prestado";
        }
    }
}

class Biblioteca {
    constructor(nombre, libros){
        this.nombre= nombre;
        this.libros= [];
    }
    agregarLibro(libros){
        this.libros.push(libros);
    }
     
    buscarPorISBN(isbn){
       return this.libros.find(libro => libro.isbn == isbn);
    }

    prestarLibro(isbn){  
        const prestamo = this.buscarPorISBN(isbn);

        if (prestamo.getEstado() == "disponible"){
            this._prestado == false;
            return `El libro $(Libro.nombre) prestado`
        }else{
            return `$(Libro.nombre) no está disponible`
        }
    }
    devolverLibro(isbn){
        const prestamo = this.buscarPorISBN(isbn);

        if (prestamo.getEstado() == "disponible"){
            this._prestado == true;
            return `El libro $(Libro.nombre) está devuleto`
        }else{
            return `$(Libro.nombre) no está prestado`
        }
    }
    get mostrarLibros(){
         return Libro.getEstado();
    } 
   };
    

    const biblio = new Biblioteca("Biblioteca Central");
    const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111", false);
    const libro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "22222", false);
    const libro3 = new Libro("El señor de los anillos", "J.R.R. Tolkien", "33333", false);
    /*
    console.log(libro1.getEstado()); // "Disponible"
    console.log(libro1.prestar());
    console.log(libro1.getEstado()); // "Prestado"
    biblio.agregarLibro(libro1);
    biblio.agregarLibro(libro2);
    biblio.agregarLibro(libro3);
    console.log(biblio.libros);
   
   */
    console.log(biblio.buscarPorISBN("22222"));
    biblio.prestarLibro("11111");
  
    
    biblio.mostrarLibros("11111"); // muestra el libro como "Prestado"