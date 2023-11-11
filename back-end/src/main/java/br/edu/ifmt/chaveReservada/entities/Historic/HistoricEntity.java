package br.edu.ifmt.chaveReservada.entities.Historic;

import br.edu.ifmt.chaveReservada.entities.Key.KeyEntity;
import br.edu.ifmt.chaveReservada.entities.Server.ServerEntity;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Table(name = "historic")
@Entity
public class HistoricEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime withdrawalAt;

    @Column()
    private LocalDateTime returnedAt;

    @ManyToOne
    @JoinColumn(name = "key_id")
    private KeyEntity key;

    @ManyToOne
    @JoinColumn(name = "server_id")
    private ServerEntity server;

    public HistoricEntity(Long id, LocalDateTime withdrawalAt, LocalDateTime returnedAt, KeyEntity key, ServerEntity server) {
        this.id = id;
        this.withdrawalAt = withdrawalAt;
        this.returnedAt = returnedAt;
        this.key = key;
        this.server = server;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getWithdrawalAt() {
        return withdrawalAt;
    }

    public void setWithdrawalAt(LocalDateTime withdrawalAt) {
        this.withdrawalAt = withdrawalAt;
    }

    public LocalDateTime getReturnedAt() {
        return returnedAt;
    }

    public void setReturnedAt(LocalDateTime returnedAt) {
        this.returnedAt = returnedAt;
    }

    public KeyEntity getKey() {
        return key;
    }

    public void setKey(KeyEntity key) {
        this.key = key;
    }

    public ServerEntity getServer() {
        return server;
    }

    public void setServer(ServerEntity server) {
        this.server = server;
    }
}
