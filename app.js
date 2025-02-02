const express   = require('express')
const app       = express()
const mysql     = require('mysql2')
const moment    = require('moment')
const {body, query, validationResult} = require('express-validator')


// sambungkan ke mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_jfd_sep'
})

// buka koneksi
db.connect()


const model_jabatan     = require('./model/model_jabatan')
const model_agama       = require('./model/model_agama')
const model_karyawan    = require('./model/model_karyawan')

const cont_default      = require('./controller/controller_default')
const cont_pendidikan   = require('./controller/controller_pendidikan')
const cont_karyawan     = require('./controller/controller_karyawan')

// untuk mengambil data yg ter-encoded(enkripsi) dari form html
// yang dikirimkan melalui protokol http
app.use( express.urlencoded({extended:false}) )
app.set('view engine', 'ejs')
app.set('views', './view-ejs')


app.get('/', cont_default.halaman_beranda)
app.get('/pendidikan', cont_pendidikan.halaman_pendidikan)
app.get('/karyawan', cont_karyawan.halaman_list_semua_karyawan)
app.get('/karyawan2', cont_karyawan.halaman_list_semua_karyawan2)
app.get('/karyawan/detail/:id_karyawan', cont_karyawan.halaman_karyawan_detail)
app.get('/karyawan2/detail2/:id_karyawan', cont_karyawan.halaman_karyawan_detail2)
app.get('/karyawan/tambah', cont_karyawan.halaman_karyawan_form_tambah)
app.get('/karyawan2/tambah2', cont_karyawan.halaman_karyawan_form_tambah2)



let formValidasiInsert = [
    body('form_nik').notEmpty().isNumeric(),
    body('form_nama').notEmpty().isString(),
]
app.post('/karyawan/proses-insert-data', formValidasiInsert, cont_karyawan.proses_insert_karyawan)
app.post('/karyawan2/proses-insert-data2',cont_karyawan.proses_insert_karyawan2)
app.get('/karyawan/hapus/:id_karyawan', cont_karyawan.proses_hapus)
app.get('/karyawan2/hapus2/:id_karyawan', cont_karyawan.proses_hapus2)
app.get('/karyawan/edit/:id_karyawan', cont_karyawan.halaman_karyawan_form_edit)
app.get('/karyawan2/edit2/:id_karyawan', cont_karyawan.halaman_karyawan_form_edit2)
app.post('/karyawan/proses-update-data/:id_karyawan', cont_karyawan.proses_update)
app.post('/karyawan2/proses-update-data2/:id_karyawan', cont_karyawan.proses_update2)

app.listen(3000, ()=>{
    console.log('Server aktif, buka http://localhost:3000')
})