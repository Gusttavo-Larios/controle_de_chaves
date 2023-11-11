package br.edu.ifmt.chaveReservada.core.use_cases;

import br.edu.ifmt.chaveReservada.core.entities.Server;

public interface CompleteRegisterUseCase {
    public Server completeRegister(Long id, String password, String confirmationPassword) throws Exception;

    private String encryptPassword(String password) {
        return null;
    }
}
