
import {expect} from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
let should = chai.should();

chai.use(chaiHttp);

// Nossa suite de teste relacionada a artigos
describe('Requests', () => {
   describe('GET /', ()=>{
    
        it('Testando rota health', (done)=>{
            chai.request('http://localhost:3000')
            .get('/')
            .end((erro,res)=>{
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.equal('CADASTRO DE CLIENTES');
                done()
            })
        })

   })

   describe('POST /clientes', ()=>{
    const cliente ={
        'nome':"Guilherme",
        'sobrenome':'Behs',
        'dataNascimento': '1993-03-21',
    }
    it('Testando rota que cadastra um cliente', (done)=>{
        chai.request('http://localhost:3000')
        .post('/clientes').send(cliente)
        .end((erro,res)=>{
            expect(res.body).to.include.all.keys('id','nome', 'sobrenome', 'dataNascimento');
            done()
        })
    })
  })

   
   describe('GET /clientes', ()=>{
    
    it('Testando rota que retorna todos os clientes', (done)=>{
        chai.request('http://localhost:3000')
        .get('/clientes')
        .end((erro,res)=>{
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('Array')
            done()
        })
    })

    describe('GET /clientes?id=', ()=>{
    
        it('Testando rota que retorna o cliente do id especificado', (done)=>{
            chai.request('http://localhost:3000')
            .get('/clientes?id=6fb0f536-028a-4ba6-bf55-bdd76c7c7cf1')
            .end((erro,res)=>{
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('Object')
                done()
            })
        })

        describe('PUT /clientes', ()=>{
    
            it('Testando rota que edita cliente', (done)=>{
                chai.request('http://localhost:3000')
                .put('/clientes')
                .send({id:'6fb0f536-028a-4ba6-bf55-bdd76c7c7cf1', dados:{'nome':'lalala'}})
                .end((erro,res)=>{
                    expect(res.status).to.be.equal(200);
                    done()
                })
            })
    
        })

        describe('DELETE /clientes', ()=>{
    
            it('Testando rota que exclui cliente', (done)=>{
                chai.request('http://localhost:3000')
                .delete('/clientes?id=6b448f33-5d60-42ba-8b3a-ca083f8c0385')
                .end((erro,res)=>{
                    expect(res.status).to.be.equal(200);
                    done()
                })
            })
    
        })
})   
})
})