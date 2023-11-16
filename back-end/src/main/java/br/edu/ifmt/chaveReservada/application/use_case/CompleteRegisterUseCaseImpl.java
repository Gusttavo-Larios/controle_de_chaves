package br.edu.ifmt.chaveReservada.application.use_case;

import br.edu.ifmt.chaveReservada.core.entities.Server;
import br.edu.ifmt.chaveReservada.core.use_cases.CompleteRegisterUseCase;

import br.edu.ifmt.chaveReservada.entities.Server.ServerEntity;
import br.edu.ifmt.chaveReservada.entities.Server.ServerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CompleteRegisterUseCaseImpl implements CompleteRegisterUseCase {

    @Autowired
    private ServerRepository serverRepository;

    @Override
    public Server completeRegister(Long id, String password, String confirmationPassword) throws Exception {
        if (!password.equalsIgnoreCase(confirmationPassword)) {
            throw new Exception("A senha e sua confirmação não são correspondentes.");
        }

        var server = serverRepository.findById(id);

        if (server.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        String encryptedPassword = this.encryptPassword(password);

//        server.get().setPassword(encryptedPassword);

        serverRepository.save(server.get());

        return null;
    }

    private String encryptPassword(String password) {
//        PasswordEncoder passwordEncoder =
//                PasswordEncoderFactories.createDelegatingPasswordEncoder();
//
//        return passwordEncoder.encode(password);
        return null;
    }
}
