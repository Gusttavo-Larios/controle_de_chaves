package br.edu.ifmt.chaveReservada.controllers.body_params;

public class ServerCompleteRegisterBodyParam {
    private Long id;
    private String password;
    private String confirmationPassword;

    public ServerCompleteRegisterBodyParam(Long id, String password, String confirmationPassword) {
        this.id = id;
        this.password = password;
        this.confirmationPassword = confirmationPassword;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmationPassword() {
        return confirmationPassword;
    }

    public void setConfirmationPassword(String confirmationPassword) {
        this.confirmationPassword = confirmationPassword;
    }
}
