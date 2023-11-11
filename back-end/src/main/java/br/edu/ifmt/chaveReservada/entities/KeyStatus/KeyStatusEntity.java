package br.edu.ifmt.chaveReservada.entities.KeyStatus;

import br.edu.ifmt.chaveReservada.entities.Key.KeyEntity;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "key_status")
@Entity
public class KeyStatusEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20, unique = true)
    private String status;

    @OneToMany(mappedBy = "keyStatus")
    private List<KeyEntity> keys;

    public KeyStatusEntity(Long id, String status, List<KeyEntity> keys) {
        this.id = id;
        this.status = status;
        this.keys = keys;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<KeyEntity> getKeys() {
        return keys;
    }

    public void setKeys(List<KeyEntity> keys) {
        this.keys = keys;
    }
}
