package br.edu.ifmt.chaveReservada.entities.Key;

import br.edu.ifmt.chaveReservada.entities.Historic.HistoricEntity;
import br.edu.ifmt.chaveReservada.entities.KeyStatus.KeyStatusEntity;
import jakarta.persistence.*;

import java.util.List;

@Table(name = "key")
@Entity
public class KeyEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(unique = true, nullable = false)
    private String roomName;

    @ManyToOne
    @JoinColumn(name = "key_status_id", nullable = false)
    private KeyStatusEntity keyStatus;

    @OneToMany(mappedBy = "key")
    private List<HistoricEntity> historic;

    public KeyEntity(Long id, String roomName, KeyStatusEntity keyStatus, List<HistoricEntity> historic) {
        this.id = id;
        this.roomName = roomName;
        this.keyStatus = keyStatus;
        this.historic = historic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public KeyStatusEntity getKeyStatus() {
        return keyStatus;
    }

    public void setKeyStatus(KeyStatusEntity keyStatus) {
        this.keyStatus = keyStatus;
    }

    public List<HistoricEntity> getHistoric() {
        return historic;
    }

    public void setHistoric(List<HistoricEntity> historic) {
        this.historic = historic;
    }
}
