import React, { useState, useEffect, useRef } from "react";

import api from "../services/api";
import BasicService from "../services/basicService";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ConfirmPopup } from "primereact/confirmpopup";
import { confirmPopup } from "primereact/confirmpopup";
import { Toast } from "react-bootstrap";

const TipoUsuario = () => {
   const toast = useRef(null);

   let dadosVazio = {
      descricao: "",
   };

   const [dadosSalvar, setDadosSalvar] = useState(dadosVazio);
   const [dadosTable, setDadosTabela] = useState([]);
   const [descricaoTipo, setDescricaoTipo] = useState("");

   const servico = new BasicService();

   useEffect(() => {
      consultarDadosTabela();
   }, []);

   const acaoInputDigitar = (e) => {
      const val = e.target.value;

      setDescricaoTipo(val);
   };

   const consultarDadosTabela = () => {
      servico
         .get("tipos-usuario")
         .then((dados) => setDadosTabela(dados))
         .catch((err) => console.log(err));
   };

   const acaoSalvar = () => {
      if (descricaoTipo) {
         dadosSalvar.descricao = descricaoTipo;
      }

      if (dadosSalvar.descricao) {
         servico
            .post("tipos-usuario", dadosSalvar)
            .then((status) => {
               if (status <= 201) {
                  setDescricaoTipo("");
                  consultarDadosTabela();
               }
            })
            .catch((err) => console.log(err));
      }
   };

   const acaoDeletar = (id) => {
      servico
         .delete(`tipos-usuario/${id}`)
         .then((status) => {
            if (status == 200) {
               consultarDadosTabela();
            }
         })
         .catch((err) => console.log(err));
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
                     onClick={(event) => acaoDeletarItem(event, rowData)}
                  />
               </div>
               <div className="p-col">
                  <Button
                     icon="pi pi-pencil"
                     className="p-button-rounded p-button-info"
                  />
               </div>
            </div>
         </React.Fragment>
      );
   };

   return (
      <div className="p-grid" style={{ marginTop: "25px" }}>
         <div className="p-col">
            <div className="p-formgroup-inline p-col-12 p-md-12 p-lg-12">
               <div className="p-field">
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
               </div>
               <Button type="button" label="Salvar" onClick={acaoSalvar} />
            </div>   

            <div
               className="card"
               style={{
                  width: "85%",
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

export default TipoUsuario;
