package br.edu.ifmt.chaveReservada.core.entities;

public interface Server {
    public Long getId();

    public void setId(Long id);

    public String getName();

    public void setName(String name);

    public String getEmail();

    public void setEmail(String email);

    public String getIdentificationNumber();

    public void setIdentificationNumber(String identificationNumber);

    public String getPassword();

    public void setPassword(String password);

    public Long getRole();

    public void setRole(Long role);
}
