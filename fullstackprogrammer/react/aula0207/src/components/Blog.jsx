import "./Blog.css";
import Postagem from "./Postagem";

function Blog() {
    return (
        <section className="blog">
            <h2>Tech Wolf Programmer</h2>
            <Postagem titulo="React é top!!!" desc="Descrição da postagem 1" linkImagem="https://picsum.photos/200" legenda="Imagem aleatória" />
        </section>
    );
}

export default Blog;