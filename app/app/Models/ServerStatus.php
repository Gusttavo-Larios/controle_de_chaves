<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ServerStatus
 * 
 * @property int $id
 * @property string|null $status
 * 
 * @property Collection|Server[] $servers
 *
 * @package App\Models
 */
class ServerStatus extends Model
{
	protected $table = 'server_status';
	public $timestamps = false;

	protected $fillable = [
		'status'
	];

	public function servers()
	{
		return $this->hasMany(Server::class);
	}
}
