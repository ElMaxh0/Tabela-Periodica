import React from "react";
import { PTableContainer, PTableRow, PTable_Data, PTable_Element } from "./styled";
import dataJson from '../../data/elements.json'
import "./style.css"
import { useSelectedElement } from "../../hooks/selectedIten";
import { usePage } from "../../hooks/page";

export default function PTable(){
    const {Pageid, setPageid} = usePage()
    const {SelectedElementid, setSelectedElementid}= useSelectedElement();
    return(
        <>
        <PTableContainer style={{
            position:"absolute",
            flexDirection:"column",
        }}>
                <div>
                    <div style={{
                        width:"1468px"
                    }}>
                        {
                            dataJson.rows.map(
                                (elementInfo)=>
                                <>
                                <>
                                    <PTable_Data>
                                        <PTableRow id={"ROW"+elementInfo.row} data={"fuckfuck"+elementInfo.row} data-row={elementInfo.row}>
                                            {
                                                elementInfo.data.map(
                                                    (data) => (
                                                        <>
                                                        <PTable_Element data-element={data.nome} data-simbolo={data.simbolo} data-massaatomica={data.massaatomica} data-numeroatomico={data.natomico} data-fusao={data.fusao} data-ebulicao={data.ebulicao} data-densidade={data.densidade} data-distroeletronica={data.eletronicconfig}>
                                                            <div>
                                                                <a className={"element__link"+" class"+data.familia} onClick={() => {setSelectedElementid(data); setPageid(2)}}>
                                                                <span class="element__mass">{data.massaatomica}</span>
                                                                <span class="element__num">{data.natomico}</span>
                                                                <span class="element__sign">{
                                                                    data.simbolo
                                                                    //data.simbolo[0].toUpperCase+data.simbolo.substring()
                                                                }</span>
                                                                <span class="element__name">{data.nome}</span>
                                                                </a>
                                                            </div>
                                                        </PTable_Element>
                                                        </>
                                                    )
                                                )
                                            }
                                        </PTableRow>
                                    </PTable_Data>
                                </>
                                </>
                            )
                        }
                    </div>
                </div>
        </PTableContainer>
        </>
    )
}