<?php 

require "Connection.php";

class Contact
{
    public $nome;
    public $msg;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM comentarios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }


    public function registerOrder()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO comentarios (nome, msg)
        VALUES ('$this->nome', '$this->msg')");
    }
}
