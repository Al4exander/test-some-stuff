import Image from 'next/image';
import MonsterTimer from '../MonsterTimer';
import ResetAllButton from '../ResetAllButton';

const MONSTERS = [
    {
        id: 'othul_valley', name: 'Паук желтый', x: 171, y: 161,
    },
    {
        id: 'krall_village', name: 'Крал', x: 122, y: 620,
    },
    {
        id: 'blood_drana_mine', name: 'Муха 1', x: 100, y: 730,
    },
    {
        id: 'mistmorn_rift', name: 'Птица в полетке', x: 347, y: 545,
    },
    {
        id: 'saltspirit_plain', name: 'Улитка', x: 546, y: 333,
    },
    {
        id: 'veiled_yulf_bassin', name: 'Волк', x: 353, y: 706,
    },
    {
        id: 'occupied_fortress', name: 'Дракон', x: 438, y: 784,
    },
    {
        id: 'shullacks_bosses_resp', name: 'Челы из плавника', x: 526, y: 634,
    },
    {
        id: 'laphsaran_battlefield', name: 'Босс в центре', x: 526, y: 724,
    },
    {
        id: 'manipulated_mau', name: 'Каменный босс', x: 685, y: 591,
    },
    {
        id: 'mau_boss', name: 'Мау', x: 755, y: 691,
    },
    {
        id: 'drana_fields', name: 'Муха 2', x: 864, y: 748,
    },
    {
        id: 'apsus_base', name: 'Лучник', x: 882, y: 184,
    },
    {
        id: 'southern_archon_base', name: 'Оса', x: 867, y: 570,
    },
];


export default function MapPage() {
    return (
        <div>
            <div style = { { position: 'relative', width: '1024px', height: '1024px' } }>
                <Image
                    src = '/map.png'
                    alt = 'Карта'
                    style = { { objectFit: 'contain' } }
                    width = { 1002 }
                    height = { 1003 } />
                { MONSTERS.map((monster) => (
                    <MonsterTimer key = { monster.id } monster = { monster } />
                )) }
            </div>
            <ResetAllButton />
        </div>
    );
}
