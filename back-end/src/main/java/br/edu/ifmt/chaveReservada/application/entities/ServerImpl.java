package br.edu.ifmt.chaveReservada.application.entities;

import br.edu.ifmt.chaveReservada.core.entities.Server;

public class ServerImpl implements Server {
    private Long id;
    private String name;
    private String email;
    private String identificationNumber;
    private String password;
    private Long role;

    public ServerImpl(Long id, String name, String email, String identificationNumber, String password, Long role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.identificationNumber = identificationNumber;
        this.password = password;
        this.role = role;
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getIdentificationNumber() {
        return identificationNumber;
    }

    @Override
    public void setIdentificationNumber(String identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public Long getRole() {
        return role;
    }

    @Override
    public void setRole(Long role) {
        this.role = role;
    }
}
