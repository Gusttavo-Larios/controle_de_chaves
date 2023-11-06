package br.edu.ifmt.chaveReservada.entities.UserRole;

import jakarta.persistence.*;


@Table(name="user_role")
@Entity(name="user_role")
public class UserRoleEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String role;

    public UserRoleEntity(Long id, String role) {
        this.id = id;
        this.role = role;
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
}
