import "./Blog.css";
import Postagem from "./Postagem";

function Blog() {
    return (
        <section className="blog">
            <h1>Tech Wolf Programmer</h1>
            <Postagem titulo="React é muito bom" desc="Descrição da postagem 1" linkImagem="https://picsum.photos/200"/>
        </section>
    );
}

export default Blog;
