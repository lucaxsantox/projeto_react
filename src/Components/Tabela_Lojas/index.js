import Table from 'react-bootstrap/Table'


function Tabela(){

return (



<Table striped bordered hover variant="dark" width="100%" cellpadding="20">
        
          <tr>

                    <th>Rio de Janeiro</th>
                    <th >Minas Gerais</th>
                    <th rowspan="1">São Paulo</th>
        </tr>
        

        
            <tr>
                    
                    <td>Rua do Arquiteto, 150</td>
                    <td>Rua São Marcelino, 208</td>
                    <td>Rua da estação, 35</td>
            </tr>
            <tr>
                    <td>2 &ordm; andar</td>
                    <td>5 &ordm; andar</td>
                    <td>1 &ordm; andar</td>
            </tr>   
            
            <tr>
                    <td>Recreio dos Bandeirantes</td>
                    <td>Novo Cruzeiro</td>
                    <td>Osasco</td>
            </tr> 

            <tr>
                    <td>(21) 2121-2121</td>
                    <td>(31) 3131-3131</td>
                    <td>(11) 1111-1111</td>
            </tr>
    </Table>
    )
}
export default Tabela;
