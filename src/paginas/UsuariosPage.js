import React, { useState, useEffect, useRef } from "react";

import BasicService from "../services/basicService";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

const Usuario = () => {
   const toast = useRef(null);

   let dadosVazio = {
      id: "",
      descricao: "",
   };

   const [dadosSalvar, setDadosSalvar] = useState(dadosVazio);
   const [dadosTable, setDadosTabela] = useState([]);
   const [descricaoTipo, setDescricaoTipo] = useState("");
   const [editandoTipo, setEditandoTipo] = useState(false);

   const servico = new BasicService();

   useEffect(() => {
      consultarDadosTabela();
   }, []);

   const limparSalvar = () => {
      setDescricaoTipo("");
      setEditandoTipo(false);
      setDadosSalvar(dadosVazio);
   };

   const acaoInputDigitar = (e) => {
      const val = e.target.value;

      if (!val) {
         limparSalvar();
         return;
      }

      setDescricaoTipo(val);
   };

   const consultarDadosTabela = () => {
      servico
         .get("usuarios")
         .then((dados) => setDadosTabela(dados))
         .catch((err) => console.log(err));
   };

   const acaoSalvar = () => {
      if (descricaoTipo) {
         dadosSalvar.descricao = descricaoTipo;
      }

      if (dadosSalvar.descricao) {
         console.log(typeof dadosSalvar.id);
         if (typeof dadosSalvar.id === "number") {
            servico
               .put(`usuarios/${dadosSalvar.id}`, dadosSalvar)
               .then(() => {
                  consultarDadosTabela();
               })
               .catch((err) => {
                  console.log(err);
                  return;
               });

            mostrarMensagem(
               "success",
               "Sucesso!",
               "Registro editado com sucesso!"
            );
            limparSalvar();
         } else {
            servico
               .post("usuarios", dadosSalvar)
               .then((status) => {
                  if (status <= 201) {
                     setDescricaoTipo("");
                     consultarDadosTabela();
                     if (editandoTipo) setEditandoTipo(false);
                  }
               })
               .catch((err) => {
                  console.log(err);
                  return;
               });

            mostrarMensagem(
               "success",
               "Sucesso!",
               "Registro salvo com sucesso!"
            );
            limparSalvar();
         }
      }
   };

   const acaoDeletar = (id) => {
      servico
         .delete(`usuarios/${id}`)
         .then(() => {
            consultarDadosTabela();
         })
         .catch((err) => console.log(err));
   };

   const acaoEditarItem = (tipo) => {
      if (tipo && tipo.id) {
         setEditandoTipo(true);
         dadosSalvar.id = tipo.id;
         dadosSalvar.descricao = tipo.descricao;
         setDescricaoTipo(tipo.descricao);
      }
   };

   const mostrarMensagem = (tipo, titulo, mensagem) => {
      toast.current.show({ severity: tipo, summary: titulo, detail: mensagem });
   };

   const acaoDeletarItem = (event, rowData) => {
      confirmPopup({
         target: event.currentTarget,
         message: "Deseja excluir esse registro?",
         icon: "pi pi-exclamation-triangle",
         accept: () => accept(rowData),
      });
   };

   const accept = (rowData) => {
      mostrarMensagem("success", "Sucesso!", "Registro excluido com sucesso!");
      acaoDeletar(rowData.id);
   };

   const templateBotoesTabela = (rowData) => {
      return (
         <React.Fragment>
            <div className="p-grid">
               <div className="p-col">
                  <Button
                     icon="pi pi-trash"
                     className="p-button-rounded p-button-danger"
                     onClick={(e) => acaoDeletarItem(e, rowData)}
                  />
               </div>
               <div className="p-col">
                  <Button
                     icon="pi pi-pencil"
                     className="p-button-rounded p-button-info"
                     onClick={() => acaoEditarItem(rowData)}
                  />
               </div>
            </div>
         </React.Fragment>
      );
   };

   return (
      <div className="p-grid" style={{ marginTop: "25px" }}>
         <div className="p-col">
            <div
               className="block p-col-12 p-md-12 p-lg-12"
               style={{ width: "99%" }}
            >
               <div className="p-col-12 p-md-12 p-lg-12">
                  <h3>Cadastro de Usuário</h3>
               </div>
               <div className="p-col-12 p-md-12 p-lg-10">
                  <label htmlFor="descricao" className="p-sr-only">
                     Descricao
                  </label>
                  <InputText
                     id="descricao"
                     type="text"
                     placeholder="Descricao"
                     value={descricaoTipo}
                     onChange={(e) => acaoInputDigitar(e)}
                  />
                  {editandoTipo && (
                     <small> Editando: {dadosSalvar.descricao}</small>
                  )}
               </div>
               <div className="p-col-12 p-md-12 p-lg-2">
                  <Button type="button" label="Salvar" onClick={acaoSalvar} />
               </div>
            </div>

            <div
               className="card"
               style={{
                  width: "90%",
                  margin: "auto",
                  border: "1px solid #21212150",
                  borderRadius: "3px",
                  padding: "10px",
               }}
            >
               <DataTable
                  value={dadosTable}
                  header="Tipos de Usuário"
                  responsiveLayout="scroll"
                  resizableColumns
                  columnResizeMode="fit"
                  showGridlines
               >
                  <Column field="descricao" header="Nome" />
                  <Column field="email" header="E-mail" />
                  <Column
                     body={templateBotoesTabela}
                     headerStyle={{ width: "10%", minWidth: "8rem" }}
                     bodyStyle={{ textAlign: "center" }}
                     exportable={false}
                  />
               </DataTable>
            </div>
            <Toast ref={toast} />
         </div>
      </div>
   );
};

export default Usuario;
