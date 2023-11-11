package br.edu.ifmt.chaveReservada.entities.Server;

import br.edu.ifmt.chaveReservada.entities.Historic.HistoricEntity;
import br.edu.ifmt.chaveReservada.entities.Role.RoleEntity;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "server")
@Entity
public class ServerEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String name;
    private String email;
    private String identificationNumber;
    private String password;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private RoleEntity role;

    @OneToMany(mappedBy = "server")
    private List<HistoricEntity> historic;

    public ServerEntity(Long id, String name, String email, String identificationNumber, String password, RoleEntity role, List<HistoricEntity> historic) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.identificationNumber = identificationNumber;
        this.password = password;
        this.role = role;
        this.historic = historic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIdentificationNumber() {
        return identificationNumber;
    }

    public void setIdentificationNumber(String identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RoleEntity getRole() {
        return role;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
    }

    public List<HistoricEntity> getHistoric() {
        return historic;
    }

    public void setHistoric(List<HistoricEntity> historic) {
        this.historic = historic;
    }
}
