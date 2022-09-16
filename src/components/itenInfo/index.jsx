import React from "react";
import { useSelectedElement } from "../../hooks/selectedIten";
import { ContainerData, OrbitContainer } from "./style";

export default function ItenData(){
    const {SelectedElementid, setSelectedElementid}= useSelectedElement();
    var distroeletronica= [
        2,
        8,
        18,
        32,
        32,
        18,
        8,

    ]
    var eletronicconfig = (Load) =>{
        var elementNAtomic= Load.numeroatomico
        var indice =0
        var result = []
        for (var Counter = 0  ; Counter ==elementNAtomic ;  Counter++){
            indice++
        }
        console.log(indice);
        return indice
    }
    eletronicconfig(SelectedElementid)
    return(
        <>
        <div>
            <div>
                <div style={{
                    backgroundColor:"rgb(15,20,35)",
                    display:"flex",
                    justifyContent:"center",
                }}>
                    <OrbitContainer>

                    </OrbitContainer>
                </div>
            </div>
            {SelectedElementid.nome}
            {SelectedElementid.densidade}
            {SelectedElementid.numeroatomico}
            {SelectedElementid.eletronicconfig2}
            {SelectedElementid.massaatomica}
        </div>
        </>
    )
}