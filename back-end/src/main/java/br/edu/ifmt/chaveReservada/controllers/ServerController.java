package br.edu.ifmt.chaveReservada.controllers;

import br.edu.ifmt.chaveReservada.application.use_case.CompleteRegisterUseCaseImpl;
import br.edu.ifmt.chaveReservada.controllers.body_params.ServerCompleteRegisterBodyParam;
import br.edu.ifmt.chaveReservada.core.use_cases.CompleteRegisterUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/server")
public class ServerController {

    @Autowired
    private CompleteRegisterUseCaseImpl completeRegisterUseCase;

    @PutMapping
    public ResponseEntity<String> completeRegister(@RequestBody ServerCompleteRegisterBodyParam bodyParam) throws Exception {
        this.completeRegisterUseCase.completeRegister(bodyParam.getId(), bodyParam.getPassword(), bodyParam.getConfirmationPassword());

        return ResponseEntity.ok("Cadastro completado!");
    }
}
