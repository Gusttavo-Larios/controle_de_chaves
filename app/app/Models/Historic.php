<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Historic
 * 
 * @property int $id
 * @property int|null $key_id
 * @property Carbon|null $returned_at
 * @property int|null $server_id
 * @property Carbon $withdrawal_at
 * 
 * @property Key|null $key
 * @property Server|null $server
 *
 * @package App\Models
 */
class Historic extends Model
{
	protected $table = 'historic';
	public $timestamps = false;

	protected $casts = [
		'id' => 'int',
		'key_id' => 'int',
		'returned_at' => 'datetime',
		'server_id' => 'int',
		'withdrawal_at' => 'datetime'
	];

	protected $fillable = [
		'key_id',
		'returned_at',
		'server_id',
		'withdrawal_at'
	];

	public function key()
	{
		return $this->belongsTo(Key::class);
	}

	public function server()
	{
		return $this->belongsTo(Server::class);
	}
}
