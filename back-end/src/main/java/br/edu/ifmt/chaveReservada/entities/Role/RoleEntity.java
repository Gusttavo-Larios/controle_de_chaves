package br.edu.ifmt.chaveReservada.entities.Role;

import br.edu.ifmt.chaveReservada.entities.Server.ServerEntity;
import jakarta.persistence.*;

import java.util.List;


@Table(name="role")
@Entity
public class RoleEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String role;

    @OneToMany(mappedBy = "role")
    private List<ServerEntity> servers;

    public RoleEntity(Long id, String role, List<ServerEntity> servers) {
        this.id = id;
        this.role = role;
        this.servers = servers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<ServerEntity> getServers() {
        return servers;
    }

    public void setServers(List<ServerEntity> servers) {
        this.servers = servers;
    }
}
