
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore
export const filmesCol = collection(db, "filmes");

// Função assíncrona = que o resultado não é obtido de imediato
// Haverá uma "espera"
export async function addFilme(data) {
  // Essa função se comunica com o firestore, envia os dados (data)
  // e salva na coleção indicada
  await addDoc(filmesCol, data);
  // await é uma instrução para esperar o resultado de addDoc
}

export async function addFilmes() {
  // Snapshot é o resultado da busca na coleção de filmes
  const snapshot = await getDocs(filmesCol);
  const filmes = [];

  // Percorremos cada documento da coleção e inserimos no array
  // de filmes
  snapshot.forEach((doc) => {
    filmes.push({ ...doc.data(), id: doc.id });
  });
  
  return filmes;
}

export async function addFilmesUsuario(idUsuario) {
  // Filtrar as filmes da coleção de acordo com o id do usuário
  const filtro = query(filmesCol, where("idUsuario", "==", idUsuario));
  const snapshot = await getDocs(filtro);
  const filmes = [];

  snapshot.forEach((doc) => {
    filmes.push({...doc.data(), id: doc.id});
  });

  return filmes;
}

export async function deleteFilme(id) {
  // Cria uma referência para um documento da coleção
  const filmeDoc = doc(filmesCol, id);
  // Deletar o documento da coleção de acordo com o id
  await deleteDoc(filmeDoc);
}

export async function getFilme(id) {
  // Cria uma referência para um documento específico da coleção
  const filmeDoc = doc(filmesCol, id);
  // Trazer as informações do documento
  const snapshot = await getDoc(filmeDoc);

  // Retorna os dados dentro do documento
  // {titulo: '', descricao: '', ...}
  return snapshot.data();
}

export async function updateFilme(id, data) {
  const filmeDoc = doc(filmesCol, id);
  await updateDoc(filmeDoc, data);
}